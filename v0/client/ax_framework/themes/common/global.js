ax( (a,x) =>
  x.css(
    {
      boxSizing: "border-box",
    },
    { scope: "*, ::after, ::before" }
  )
);
