import Header from "./Header";

export interface PageProps {
  className?: string;
  children: any;
  hideHeader?: boolean;
  hideFooter?: boolean;
  hideContainer?: boolean;
  hidePadding?: boolean;
}

export default function Page(props: PageProps) {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        background:
          "radial-gradient(50% 50% at 50% 50%, #2d0064 0%, #0d001c 100%)",
      }}
    >
      <div
        className="flex-1 flex flex-col w-screen"
        style={{ background: 'url("/background.png")' }}
      >
        {props.hideHeader ? null : <Header />}
        <main
          className={`
                        flex-1 flex flex-col ${props.className ?? ""}
                        ${props.hideContainer ? "" : "container"}
                        ${props.hidePadding ? "" : "py-10"}
                    `}
        >
          {props.children}
        </main>
      </div>
    </div>
  );
}
