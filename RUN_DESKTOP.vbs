Set WshShell = CreateObject("WScript.Shell")
WshShell.CurrentDirectory = "c:\Users\thora\Downloads\IP_VEXA_PORTABLE_FOR_FRIEND\IP_VEXA_PORTABLE_FOR_FRIEND\extracted_app"
WshShell.Run "npx.cmd electron .", 1, False
