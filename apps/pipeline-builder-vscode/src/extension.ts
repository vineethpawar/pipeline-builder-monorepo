// src/extension.ts
import * as vscode from 'vscode';



export function activate(context: vscode.ExtensionContext) {
  vscode.commands.registerCommand('pipeline-builder-vscode.helloWorld', () => {
  const panel = vscode.window.createWebviewPanel(
    'myExtension', // Identifies the type of the webview. Used internally
    'Pipeline Builder', // Title of the panel displayed to the user
    vscode.ViewColumn.One, // Editor column to show the new webview panel in.
    {
      enableScripts: true,
      retainContextWhenHidden: true,
    }
  );

  // Replace with PROD_URL of web deployment
  const externalUrl = 'http://localhost:3001';

  const sidebarWidth = vscode.workspace
  .getConfiguration()
  .get<number>('workbench.sideBar.width', 30); 
  // Set the HTML content with an iframe loading the external URL
  panel.webview.html = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Cat Coding</title>
  </head>
  <body style="margin:0;padding:0;">
  <iframe src="${externalUrl}" height="100%" width="100%"  frameborder="0" allowfullscreen="true" style="position:absolute;border:none;"></iframe>
  </body>
  </html>`;

});
} 
