MainLayout = React.createClass({
  render() {
    return (
      <div>
        <header>
          <NavigationComponent />
        </header>
        <main>
          {this.props.content}
        </main>
        <footer>
        </footer>
      </div>
    );
  }
});