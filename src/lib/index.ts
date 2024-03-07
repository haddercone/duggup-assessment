// place files you want to import through the `$lib` alias in this folder.
export const clipText = (name : string, length:number ) : string => {
    return name.length >= length ? name.slice(0, length) + "..." : name;
  };
