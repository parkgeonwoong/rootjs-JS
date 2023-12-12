{
  function checkNotNull<Type>(arg: Type | null): Type {
    if (arg === null) throw new Error("null이 들어왔습니다.").message;
    return arg;
  }

  const result = checkNotNull(123);
}
