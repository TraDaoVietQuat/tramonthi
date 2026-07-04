Add-Type -Assembly System.IO.Compression.FileSystem

$SrcDir  = $env:ZIP_SRC.TrimEnd('\')
$OutFile = $env:ZIP_OUT

if (-not $SrcDir -or -not $OutFile) {
    Write-Error "ZIP_SRC hoac ZIP_OUT chua duoc dat."
    exit 1
}

if (Test-Path $OutFile) { Remove-Item $OutFile -Force }

$exclude = @('.git', 'TramOnThi-FullPackage.zip', '.setup_done', 'PRODUCTION_BUILD')

$zip   = $null
$count = 0
$skip_count = 0

try {
    $zip = [IO.Compression.ZipFile]::Open($OutFile, 'Create')

    $files = Get-ChildItem -LiteralPath $SrcDir -Recurse -File
    foreach ($file in $files) {
        $rel = $file.FullName.Substring($SrcDir.Length).TrimStart('\')

        $shouldSkip = $false
        foreach ($ex in $exclude) {
            if ($rel.StartsWith($ex)) { $shouldSkip = $true; break }
        }
        if ($shouldSkip) { $skip_count++; continue }

        try {
            [IO.Compression.ZipFileExtensions]::CreateEntryFromFile(
                $zip, $file.FullName, $rel,
                [IO.Compression.CompressionLevel]::Optimal
            ) | Out-Null
            $count++
            if ($count % 500 -eq 0) { Write-Host "  Da them $count files..." }
        } catch {
            Write-Warning "Bo qua (bi khoa): $rel"
            $skip_count++
        }
    }
} finally {
    if ($zip -ne $null) {
        $zip.Dispose()
        Write-Host "ZIP da duoc dong lai."
    }
}

Write-Host "Hoan thanh: $count files da nen, $skip_count files bo qua."
Write-Host "Output: $OutFile"
