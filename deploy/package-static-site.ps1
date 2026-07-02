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
    "styles.css",
    "script.js",
    "assets"
)

foreach ($item in $itemsToCopy) {
    $sourcePath = Join-Path $projectRoot $item

    if (-not (Test-Path -LiteralPath $sourcePath)) {
        throw "Missing required deploy item: $item"
    }

    Copy-Item -LiteralPath $sourcePath -Destination $siteRoot -Recurse -Force
}

Compress-Archive -Path (Join-Path $siteRoot "*") -DestinationPath $zipPath -Force

Write-Host "Package ready:"
Write-Host "  Site folder: $siteRoot"
Write-Host "  Zip file:    $zipPath"
