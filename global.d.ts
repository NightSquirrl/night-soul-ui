declare global {
  interface IThemeProvider {
    button: {
      backgroundColor: string;
      color: string;
      borderRadius: string;
    };
  }

  interface ITreeNodesData {
    children?: ITreeNodesData[];
    name: string;
    id: string;
    icon?: string;
    type?: number;
  }
}

export {};
