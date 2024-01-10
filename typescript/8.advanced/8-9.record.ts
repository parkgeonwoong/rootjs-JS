{
  type PageInfo = {
    title: string;
  };
  type Page = "home" | "about" | "contact";

  // Record: 특정 타입을 다른 타입으로 매핑할 때 사용
  const nav: Record<Page, PageInfo> = {
    home: { title: "Home" },
    about: { title: "About" },
    contact: { title: "Contact" },
  };
}
