export class Constants{
    public static readonly localDatabase = 'http://localhost/PHPDatabases/LocalDatabase.php';
    public static readonly remoteDatabase = import.meta.env.VITE_REACT_DATABASE;

    public static readonly ApiKey = "dc3d5647c30e475bbfcf9e31801f36d3";
    public static readonly IP = "";

    public static readonly Captcha = (Math.ceil(Math.random() * 10) - 1).toString() + (Math.ceil(Math.random() * 10) - 1).toString() + (Math.ceil(Math.random() * 10) - 1).toString() + (Math.ceil(Math.random() * 10) - 1).toString();
}

