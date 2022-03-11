import snippetInterface from "./snippetInterface";

interface userInterface {
  name: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  pet: string;
  membership: string;
  scoreHistoryWpm: number[];
  snippetsJavaScript: snippetInterface[] | string[];
  snippetsPhyton: snippetInterface[] | string[];
  snippetsCsharp: snippetInterface[] | string[];
  scoreHistoryAccuracy: number[];
  scoreHistoryPerCharacter: number[]; //ojuuu ehhh que eesto esta mal y hay que revisarlo
  snippetsTypeScript: snippetInterface[] | string[];
  snippetsCollection?: snippetInterface[];
}

export default userInterface;
