import { loginUserThunk } from "./userCredentialsThunk";

test("please work", async () => {
  await loginUserThunk({ name: "ahhh", password: "flsdkj" });
});
