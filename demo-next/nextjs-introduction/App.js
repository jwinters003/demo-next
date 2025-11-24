function App() {
  return (
    <div>
      <Navbar />
      <div className="p-12 space-y-8">
        <Header />
        <Content content="This is a paragraph from my first React component." />
        <Main />
      </div>
      <Footer />
    </div>
  );
}
