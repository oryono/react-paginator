## react-paginator ![npm version](https://img.shields.io/npm/v/@oryono/react-paginator.svg?style=flat)

The way you use it is similar to Laravel's paginator.

## Installation

### Through npm
``` bash
npm install @oryono/react-paginator --save
```

## Usage

```
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
                  <Users/>
                  <Paginator
                      totalCount={50} <!--This is the total number of items-->
                      currentPage={1} <!--Current page as from the api-->
                      pageSize={10} <!-- Page size -->
                      onPageChange={ this.handlePageChange } <!-- This is what happens when a page is clicked-->
                  />
            </React.Fragment>

        )
                
    }
                
}




### Thats it




