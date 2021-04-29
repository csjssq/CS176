function fibonacci2(n) {
    if (n<=2) {
        return 1;
    }
    return fibonacci2(n-1)+fibonacci2(n-2);
}

    onmessage =function(event) {
    var n = parseInt(event.data, 10);
        postMessage(fibonacci2(n));
    };