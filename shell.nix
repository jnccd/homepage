#nix-shell --command "npm run build"
{ pkgs ? import <nixpkgs> {} }:
with pkgs;
mkShell {
  packages = [ pnpm nodejs_22 ];

  shellHook = ''
    pnpm i
  '';
}