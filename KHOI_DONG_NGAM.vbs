Dim shell, fso, dir
Set shell = CreateObject("WScript.Shell")
Set fso   = CreateObject("Scripting.FileSystemObject")

dir = fso.GetParentFolderName(WScript.ScriptFullName)

' Chay server hoan toan an (0 = khong hien cua so)
' Dat bien CHAY_NGAM de bat khong tu mo trinh duyet
shell.Run "cmd /c set CHAY_NGAM=1 && """ & dir & "\KHOI_DONG.bat""", 0, False

' Thong bao nho sau 4 giay
WScript.Sleep 4000
shell.Popup "TramOnThi da khoi dong!" & Chr(13) & "Truy cap: http://localhost:3000", 4, "TramOnThi", 64

Set shell = Nothing
Set fso   = Nothing
