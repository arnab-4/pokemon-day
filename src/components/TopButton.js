function GoToTop(){
    function moveUp(){
        document.documentElement.scrollTop = 0;
    }

    return(
        <div onClick = {moveUp} style = {{ position: 'fixed', right: 0, bottom: 50, cursor: 'pointer'}}>
            <img width='50px' height='50px' src = '/upArrow.png' alt='up arrow' />
        </div>
    );
}

export default GoToTop;