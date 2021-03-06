<h3 align="center">React Paginator</h3>

<p align="center">
<a href="https://www.npmjs.com/package/@oryono/react-paginator"><img src="https://img.shields.io/npm/v/@oryono/react-paginator.svg" alt="NPM"></a>
<a href="https://www.npmjs.com/package/@oryono/react-paginator?minimal=true"><img src="https://img.shields.io/npm/dt/@oryono/react-paginator.svg" alt="NPM"></a>
<a href="https://www.npmjs.com/package/@oryono/react-paginator"><img src="https://img.shields.io/npm/l/@oryono/react-paginator.svg" alt="NPM"></a>
</p>


## Installation

### Through npm
``` bash
npm install @oryono/react-paginator --save
```

## Usage

```js
import Paginator from '@oryono/react-paginator'
import React, { Component } from 'react'
import getUsers from './actions'

class ComponentName extends Component {
    // Your page handler could be something like this
    handlePageChange = page => {
        getUsers(page);
    };
    render () {
        return (
            <React.Fragment>
                  <Users />
                  <Paginator
                      totalCount={50}  /*This is the total number of items */
                      currentPage={1} /* Current page as from the api */
                      pageSize={10} /* Page size */
                      onPageChange={ this.handlePageChange } /* This is what happens when a page is clicked */
                  />
            </React.Fragment>

        )
                
    }
                
}
```

## That's it.
You should consider contributing to this noble cause 😜




