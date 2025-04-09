/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
exports.shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.up = (pgm) => {

    pgm.sql(`
    CREATE TABLE products (
    id SERIAL PRIMARY KEY, 
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    image_url VARCHAR(255),
    rating DECIMAL(3, 2),
    rating_count INT DEFAULT 0,
    brand VARCHAR(100),
    category INT,
    stock INT DEFAULT 0,
    size VARCHAR(100),
    color VARCHAR(100),
    weight DECIMAL(10, 2),
    dimensions VARCHAR(100),
    created_at TIMESTAMP, -- Custom timestamp for creation
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_active BOOLEAN DEFAULT TRUE
);
` )
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.down = (pgm) => {
    
    pgm.sql(`
      
   DROP TABLE products;   
        ` )
};
