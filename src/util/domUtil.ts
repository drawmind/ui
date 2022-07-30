export const getElementOffsetToPageTop = (el: HTMLElement) => {
    let _x = 0, _y = 0;

    while(el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
        _x += el.offsetLeft;
        _y += el.offsetTop;
        el = el.offsetParent as HTMLElement;
    }

    return {left: _x, top: _y};
};
