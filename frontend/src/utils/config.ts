class Config {
    public booksUrl = "";
    public bookUrl = "";
}

class DevelopmentConfig extends Config {
    public bookUrl = "http://localhost:3001/api/book/";
    public booksUrl = "http://localhost:3001/api/books";
}

class ProductionConfig extends Config {
    public bookUrl = "http://localhost:3001/api/book/";
    public booksUrl = "http://localhost:3001/api/books";
}

const config = process.env.NODE_ENV === "development" ? new DevelopmentConfig() : new ProductionConfig();

export default config;