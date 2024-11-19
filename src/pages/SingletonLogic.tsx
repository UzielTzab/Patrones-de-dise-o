class ConfigService {
    private static instance: ConfigService;
    private settings: Record<string, string | number | boolean> = {};
  
    private constructor() {
      this.settings = {
        tema: "blanco",
        idioma: "español",
      };
    }
  
    public static getInstance(): ConfigService {
      if (!ConfigService.instance) {
        ConfigService.instance = new ConfigService();
      }
      return ConfigService.instance;
    }
  
    public getSetting(key: string): string | number | boolean | undefined {
      return this.settings[key];
    }
  
    public setSetting(key: string, value: string | number | boolean): void {
      this.settings[key] = value;
    }

    public getAllSettings(): Record<string, string | number | boolean> {
        return this.settings;
      }
  }
  
  export default ConfigService;
  