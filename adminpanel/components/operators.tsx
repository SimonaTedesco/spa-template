
function Instance() {
    return (
        <div>
        <b>Instance</b>
        </div>
                
    )
}

function Operator() {
    return (
        <li>
            <a className="uk-accordion-title" href="#">Item 1</a>
            <div className="uk-accordion-content">

            


                <Instance />
                <Instance />
                
                <table className="uk-table uk-table-divider"><thead><tr>
<th align="left">Option</th>
<th align="left">Value</th>
<th align="left">Default</th>
<th align="left">Description</th>
</tr>
</thead><tbody><tr>
<td align="left"><code>active</code></td>
<td align="left">Number</td>
<td align="left"><code>false</code></td>
<td align="left">Index of the element to open initially.</td>
</tr>
</tbody>
</table>


<div className="uk-child-width-expand@s uk-text-center" uk-grid>
    <div>
        <div className="uk-card uk-card-default uk-card-body">Item</div>
    </div>
    <div>
        <div className="uk-card uk-card-default uk-card-body">Item</div>
    </div>
    <div>
        <div className="uk-card uk-card-default uk-card-body">Item</div>
    </div>
</div>


            </div>
        </li>
    ) 
}



function Operators() {
    return (
        <div>
    <h1>
        Operators
        </h1>
        <ul uk-accordion="collapsible: false">
        <Operator />
        <Operator />
        

    </ul>
    </div>
        
    )
  }
  export default Operators
  