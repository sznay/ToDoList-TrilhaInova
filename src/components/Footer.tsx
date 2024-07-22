export function Footer() {
  return (
    <footer className="w-full bg-zinc-800 flex flex-col md:flex-row justify-between lg:justify-around gap-2 items-center p-3 text-zinc-100 font-semibold fixed bottom-0">
      <p>Projeto Trilha Inova Maranhão</p>

      {/* Div divisoria */}
      <div className="w-full h-px bg-zinc-200 md:hidden"></div>

      <div className="flex flex-col items-center">
        <p>Desenvolvido por: </p>
        <ul className="text-center md:flex items-center justify-between gap-2">
          <li>Euderlan |</li>
          <li>Naylane Ferreira |</li>
          <li>Pedro Henrique </li>
        </ul>
      </div>
    </footer>
  );
}
