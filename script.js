document.addEventListener('DOMContentLoaded', () => {
    const interBubble = document.querySelector<HTMLDivElement>('.interactive');
    if (!interBubble) return;

    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(move);
    }

    window.addEventListener('mousemove', (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
    });

    interBubble.addEventListener('mouseover', () => {
        interBubble.style.transform += ' scale(1.1)';
    });

    interBubble.addEventListener('mouseout', () => {
        interBubble.style.transform = interBubble.style.transform.replace(' scale(1.1)', '');
    });

    move();
});