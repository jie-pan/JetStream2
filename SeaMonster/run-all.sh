
d8="/home/panjie/web/src/v82/v8/out.gn/x64.release_org/d8"
jsc="/home/panjie/web/src/webkit/WebKitBuild/Release/bin/jsc"

for i in ${d8} ${jsc}
do
    echo  "running $i"
    for j in  "./run-aes.js" "./run-pdkdf2.js"  "./run-sha256.js"
    do
        echo "    $j"
        ${i} ${j}
    done
done
