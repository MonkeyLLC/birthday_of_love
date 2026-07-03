#!/usr/bin/env bash
set -euo pipefail

output_dir="${1:-deploy-dist}"
script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
project_root="$(cd "$script_dir/.." && pwd)"
output_root="$project_root/$output_dir"
site_root="$output_root/site"
zip_path="$output_root/birthday_of_love-static.zip"

hash_file() {
    local file="$1"

    if command -v sha256sum >/dev/null 2>&1; then
        sha256sum "$file" | awk '{print substr($1, 1, 8)}'
        return
    fi

    if command -v shasum >/dev/null 2>&1; then
        shasum -a 256 "$file" | awk '{print substr($1, 1, 8)}'
        return
    fi

    openssl dgst -sha256 "$file" | awk '{print substr($NF, 1, 8)}'
}

require_file() {
    local file="$1"

    if [ ! -e "$project_root/$file" ]; then
        echo "Missing required deploy item: $file" >&2
        exit 1
    fi
}

require_file "index.html"
require_file "styles.css"
require_file "script.js"
require_file "assets"

rm -rf "$site_root"
rm -f "$zip_path"
mkdir -p "$site_root"

cp "$project_root/index.html" "$site_root/index.html"
cp -R "$project_root/assets" "$site_root/assets"

styles_hash="$(hash_file "$project_root/styles.css")"
script_hash="$(hash_file "$project_root/script.js")"
styles_target="styles.${styles_hash}.css"
script_target="script.${script_hash}.js"

cp "$project_root/styles.css" "$site_root/$styles_target"
cp "$project_root/script.js" "$site_root/$script_target"

sed \
    -e "s#\\./styles\\.css#./$styles_target#g" \
    -e "s#\\./script\\.js#./$script_target#g" \
    "$site_root/index.html" > "$site_root/index.html.tmp"
mv "$site_root/index.html.tmp" "$site_root/index.html"

if command -v zip >/dev/null 2>&1; then
    (cd "$site_root" && zip -qr "$zip_path" .)
else
    echo "zip command not found; skipped zip package."
fi

echo "Package ready:"
echo "  Site folder: $site_root"
if [ -f "$zip_path" ]; then
    echo "  Zip file:    $zip_path"
fi
