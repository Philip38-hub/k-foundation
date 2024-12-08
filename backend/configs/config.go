package configs

type Config struct {
	Server   ServerConfig
	Database DatabaseConfig
	JWT      JWTConfig
}

type ServerConfig struct {
	Port string
	Mode string // development or production
}

type DatabaseConfig struct {
	Host     string
	Port     string
	User     string
	Password string
	DBName   string
	SSLMode  string
}

type JWTConfig struct {
	Secret string
	TTL    int64 // Time to live in hours
}

func LoadConfig() *Config {
	return &Config{
		Server: ServerConfig{
			Port: "8080",
			Mode: "development",
		},
		Database: DatabaseConfig{
			Host:     "localhost",
			Port:     "5432",
			User:     "postgres",
			Password: "postgres",
			DBName:   "ngo_website",
			SSLMode:  "disable",
		},
		JWT: JWTConfig{
			Secret: "your-secret-key",
			TTL:    24, // 24 hours
		},
	}
}
