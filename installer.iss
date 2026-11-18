[Setup]
AppId={{8E9B4C2A-3F1D-4A89-9E2B-7C1D4F8A9012}
AppName=Shareload
AppVersion=1.0.0
AppPublisher=Shareload
DefaultDirName={autopf32}\Shareload
DefaultGroupName=Shareload
AllowNoIcons=yes
OutputDir=installer_output
OutputBaseFilename=Shareload_Setup
SetupIconFile=icon.ico
Compression=lzma2
SolidCompression=yes
WizardStyle=modern
MinVersion=10.0
UninstallDisplayName=Shareload
UninstallDisplayIcon={app}\Shareload.exe

[Languages]
Name: "russian"; MessagesFile: "compiler:Languages\Russian.isl"
Name: "ukrainian"; MessagesFile: "compiler:Languages\Ukrainian.isl"
Name: "english"; MessagesFile: "compiler:Default.isl"

[Tasks]
Name: "desktopicon"; Description: "{cm:CreateDesktopIcon}"; GroupDescription: "{cm:AdditionalIcons}"
Name: "startupicon"; Description: "Запускать Shareload при старте Windows / Run at Windows startup"; GroupDescription: "{cm:AdditionalIcons}"; Flags: unchecked

[Files]
Source: "dist\Shareload.exe"; DestDir: "{app}"; Flags: ignoreversion

[Icons]
Name: "{group}\Shareload"; Filename: "{app}\Shareload.exe"
Name: "{group}\Удалить Shareload"; Filename: "{uninstallexe}"
Name: "{autodesktop}\Shareload"; Filename: "{app}\Shareload.exe"; Tasks: desktopicon
Name: "{userstartup}\Shareload"; Filename: "{app}\Shareload.exe"; Tasks: startupicon

[Run]
Filename: "{app}\Shareload.exe"; Description: "{cm:LaunchProgram,Shareload}"; Flags: nowait postinstall skipifsilent

[Code]
function IsWebView2Installed(): Boolean;
var
  Version: String;
begin
  Result :=
    RegQueryStringValue(HKLM32, 'SOFTWARE\Microsoft\EdgeUpdate\Clients\{F3017226-FE2A-4295-8BDF-00C3A9A7E4C5}', 'pv', Version) or
    RegQueryStringValue(HKCU32, 'SOFTWARE\Microsoft\EdgeUpdate\Clients\{F3017226-FE2A-4295-8BDF-00C3A9A7E4C5}', 'pv', Version) or
    RegQueryStringValue(HKLM64, 'SOFTWARE\Microsoft\EdgeUpdate\Clients\{F3017226-FE2A-4295-8BDF-00C3A9A7E4C5}', 'pv', Version) or
    RegQueryStringValue(HKCU64, 'SOFTWARE\Microsoft\EdgeUpdate\Clients\{F3017226-FE2A-4295-8BDF-00C3A9A7E4C5}', 'pv', Version);
end;

procedure CurStepChanged(CurStep: TSetupStep);
var
  ResultCode: Integer;
  BootstrapperPath: String;
begin
  if (CurStep = ssPostInstall) and (not IsWebView2Installed()) then
  begin
    BootstrapperPath := ExpandConstant('{tmp}\MicrosoftEdgeWebview2Setup.exe');
    if Exec('powershell.exe',
      '-NoProfile -ExecutionPolicy Bypass -Command "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; Invoke-WebRequest -Uri ''https://go.microsoft.com/fwlink/p/?LinkId=2124703'' -OutFile ''' + BootstrapperPath + '''"',
      '', SW_HIDE, ewWaitUntilTerminated, ResultCode) then
    begin
      if FileExists(BootstrapperPath) then
      begin
        Exec(BootstrapperPath, '/silent /install', '', SW_HIDE, ewWaitUntilTerminated, ResultCode);
      end;
    end;
  end;
end;