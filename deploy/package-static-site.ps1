param(
    [string]$OutputDir = "deploy-dist"
)

$ErrorActionPreference = "Stop"

$projectRoot = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$outputRoot = Join-Path $projectRoot $OutputDir
$siteRoot = Join-Path $outputRoot "site"
$zipPath = Join-Path $outputRoot "birthday_of_love-static.zip"

function Assert-InsideProject {
    param([string]$PathToCheck)

    $fullPath = [System.IO.Path]::GetFullPath($PathToCheck)
    $fullProjectRoot = [System.IO.Path]::GetFullPath($projectRoot)

    if (-not $fullPath.StartsWith($fullProjectRoot, [System.StringComparison]::OrdinalIgnoreCase)) {
        throw "Refusing to write outside project root: $fullPath"
    }
}

Assert-InsideProject -PathToCheck $outputRoot
Assert-InsideProject -PathToCheck $siteRoot
Assert-InsideProject -PathToCheck $zipPath

if (Test-Path -LiteralPath $siteRoot) {
    Remove-Item -LiteralPath $siteRoot -Recurse -Force
}

if (Test-Path -LiteralPath $zipPath) {
    Remove-Item -LiteralPath $zipPath -Force
}

New-Item -ItemType Directory -Path $siteRoot -Force | Out-Null

$itemsToCopy = @(
    "index.html",
    "assets"
)

foreach ($item in $itemsToCopy) {
    $sourcePath = Join-Path $projectRoot $item

    if (-not (Test-Path -LiteralPath $sourcePath)) {
        throw "Missing required deploy item: $item"
    }

    Copy-Item -LiteralPath $sourcePath -Destination $siteRoot -Recurse -Force
}

$indexPath = Join-Path $siteRoot "index.html"
$indexHtml = Get-Content -LiteralPath $indexPath -Raw -Encoding UTF8

$cacheBustedFiles = @(
    @{
        Source = "styles.css"
        TargetPattern = "styles.{0}.css"
        Reference = "./styles.css"
    },
    @{
        Source = "script.js"
        TargetPattern = "script.{0}.js"
        Reference = "./script.js"
    }
)

foreach ($file in $cacheBustedFiles) {
    $sourcePath = Join-Path $projectRoot $file.Source

    if (-not (Test-Path -LiteralPath $sourcePath)) {
        throw "Missing required deploy item: $($file.Source)"
    }

    $hash = (Get-FileHash -LiteralPath $sourcePath -Algorithm SHA256).Hash.Substring(0, 8).ToLowerInvariant()
    $targetName = [string]::Format($file.TargetPattern, $hash)
    $targetPath = Join-Path $siteRoot $targetName

    Copy-Item -LiteralPath $sourcePath -Destination $targetPath -Force

    $versionedReference = "./$targetName"
    $indexHtml = $indexHtml.Replace($file.Reference, $versionedReference)
}

Set-Content -LiteralPath $indexPath -Value $indexHtml -Encoding UTF8

Compress-Archive -Path (Join-Path $siteRoot "*") -DestinationPath $zipPath -Force

Write-Host "Package ready:"
Write-Host "  Site folder: $siteRoot"
Write-Host "  Zip file:    $zipPath"
