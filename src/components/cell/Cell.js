export function Cell(props) {
    return <div onClick={props.cellClicked} style={{
        width: '20px',
        height: '20px', 
        background: props.isAlive ? 'gray' : 'white',
        border: '0.1px solid lightgray',
        boxSizing: 'border-box'
    }}/>
}