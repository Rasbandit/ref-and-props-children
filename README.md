# Refs, Children, and Functional Component

## Children

You need to bring in React.Children into your component to manipulate it. you can either destructure it from React like you do with Component or just use React.Children

### Children.count(this.props.children)

This will return the number of children passed in.

### Children.map(this.props.children, (child) => {})

This is the proper way to loop over each child passed in