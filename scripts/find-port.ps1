# Tim cong (port) trong vong 3000-3020 chua duoc su dung
param([int]$Start = 3000, [int]$Max = 3020)

$port = $Start
while ($port -le $Max) {
    try {
        $client = New-Object System.Net.Sockets.TcpClient
        $client.Connect('127.0.0.1', $port)
        $client.Close()
        $port++
    }
    catch {
        break
    }
}
Write-Output $port
