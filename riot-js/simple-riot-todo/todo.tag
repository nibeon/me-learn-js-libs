   <todo>
       
       <h3>TODO</h3>
       <ul>
           <li each={ item, i in items }>{ item }</li>
       </ul>
       
       <form action="" onsubmit={ handleSubmit }>
           <input type="text">
           <button>Add #{ items.length + 1 }</button>
        </form>
        
        this.items = []
        
        handleSubmit(e) {
            var input = e.target[0]
            this.items.push(input.value)
            input.value = ''
        }
       
   </todo>