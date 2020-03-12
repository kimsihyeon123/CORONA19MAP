var Body = {
    setColor: function (color) {
        $('body').css('color',color);
    //     document.querySelector('body').style.color = color;
    },
        
     setbackgroundColor: function (color) {
    //     document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor',color);
 }
}

var Links = {
    setColor: function (color) {
        $('a').css('color',color)
        //var alist = document.querySelectorAll('a');
        // var i = 0;

        // while (i < alist.length) {
        //     alist[i].style.color = color;
        //     i = i + 1;
        // }
    }
}
//주간,야간모드 변환함수
function nightdayHandler(self) {
    var target = document.querySelector('body');

    if (self.value === '야간모드') {
        Body.setbackgroundColor('black')
        Body.setColor('white');
        self.value = '주간모드';
        Links.setColor('powderblue');
    }
    else {
        Body.setbackgroundColor('white')
        Body.setColor('black');
        self.value = '야간모드';
        Links.setColor('blue');
    }
}