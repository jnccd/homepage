#nix-shell --command "npm run build"
{ pkgs ? import <nixpkgs> {} }:
with pkgs;
mkShell {
  packages = [
    importNpmLock.hooks.linkNodeModulesHook
    nodejs
  ];

  npmDeps = importNpmLock.buildNodeModules {
    npmRoot = ./.;
    inherit nodejs;
  };
}