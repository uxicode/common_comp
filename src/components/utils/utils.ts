
const offset=(elem: HTMLElement )=>{
    const doc = elem && elem.ownerDocument;
    const docElem = doc.documentElement;
    let box: {top:number, left:number}= {top: 0, left: 0};

    if (typeof elem.getBoundingClientRect !== typeof undefined) {
        box = elem.getBoundingClientRect();
    }

    return {
        top: box.top + window.scrollY - docElem.clientTop,  //window.pageYOffset  ---> scrollY
        left: box.left + window.scrollX - docElem.clientLeft  //window.pageXOffset ---> scrollX
    };
}

const rippleEffect=( button: HTMLElement, pageX:number, pageY:number )=>{
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    const pos=offset( button );
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.top = `${pageY - pos.top - radius}px`;
    circle.style.left = `${pageX - pos.left - radius}px`;
    circle.classList.add('ripple-effect');
    button.appendChild(circle);
    //
    //애니메이션이 종료되는 시점에 등록된 ripple-effect' 클래스 가진 엘리먼트를 제거.
    // once 옵션으로 animationend 이벤트 리스너를 한번만 실행되겠끔 한다. ( removeEventListener 안해도 됨 )
    circle.addEventListener('animationend', () =>{
        circle.remove();
    }, {once: true});
}

export {
    rippleEffect,
    offset
}
