var btnMail = Ti.UI.createButton({
        top: '15%',
        width: '35%',
        height: '25%',
        left : '8%',
        backgroundImage:'./Mail.jpg',
        zIndex:1,
    });
    winHome.add(btnMail);
    
    btnMail.addEventListener('click', function (evt) {
        someCallback && someCallback(evt);
        winHome.fireEvent('buttonClick', evt);
    });
    
    return winHome;
