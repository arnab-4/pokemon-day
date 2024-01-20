function Spinner(){
    return(
        <div className="flex justify-center items-center">
            <div className="animate-spin" role="status">
                <img className = 'h-8 w-8' src = '/spinner.png' alt = 'spinner' />
            </div>
        </div>
    )
}

function LoadButton(props){
    return(
        <button onClick={ props.load } className = 'bg-amber-400 p-3 rounded-lg font-medium shadow-lg'>
            Load More
        </button>
    )
}

function LoadingButton(props){
    return(
        <>
            {props.loading ? <Spinner /> : <LoadButton load = {props.loadMore} />}
        </>       
    );
}

export  default LoadingButton;