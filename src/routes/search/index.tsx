import MainLayout from "~/layouts/main";

import { createSignal } from "solid-js";
import { commands} from "~/bindings";

import { Button } from "~/components/ui/button";
import { TextField, TextFieldRoot } from "~/components/ui/textfield";

export default function SearchPage() {
  const [search, setSearch] = createSignal("");

  async function onSearch() {
    setSearch(await commands.search(search()));
  }

  return (
    <MainLayout>
      <h1 class="text-foreground text-start text-2xl font-semibold">
        Password
      </h1>
      <form
        class="flex justify-center gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          onSearch();
        }}
      >
        <TextFieldRoot class="w-full">
          <TextField id="search-input" onChange={(e: any) => setSearch(e.currentTarget.value)} type="text" placeholder="Search password" />
        </TextFieldRoot>
        <Button type="submit" variant="default">
          Search
        </Button>
      </form>

      <p>{search()}</p>
      <Button onClick={() => history.back()}>Back</Button>
    </MainLayout>
  );
}
