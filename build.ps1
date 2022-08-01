$ErrorActionPreference = "Stop"

if (Test-Path build) {
    Remove-Item -Recurse build
}
New-Item -ItemType Directory build

Write-Host "Building Homepage"
Set-Location .\wiki-homepage
npm install
npm run build
Copy-Item -Recurse build/* ../build/
Set-Location ..
Write-Host 

Write-Host "Installing MkDocs dependencies"
pip install -r ./requirements.txt

Write-Host "Building MkDocs (academic)"
Set-Location academic
mkdocs build
Copy-Item -Recurse site ../build/docs/academic/
Set-Location ..
Write-Host 

Write-Host "Building MkDocs (knowledge)"
Set-Location knowledge
mkdocs build
Copy-Item -Recurse site ../build/docs/knowledge/
Set-Location ..
Write-Host 
