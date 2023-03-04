// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
use tauri::Manager;
use tauri::{CustomMenuItem, SystemTray, SystemTrayEvent, SystemTrayMenu, SystemTrayMenuItem};

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}


#[tauri::command]
fn set_menu_item(app_handle: tauri::AppHandle, title: &str) {
    let item_handle = app_handle.tray_handle().get_item("show");
    item_handle.set_title(title).unwrap();
}


#[tauri::command]
fn set_tray_icon(app_handle: tauri::AppHandle, name: &str) {
    match name {
        "1" => app_handle
            .tray_handle()
            .set_icon(tauri::Icon::Raw(
                include_bytes!("../icons/tray/1.png").to_vec(),
            ))
            .unwrap(),
        _ => app_handle
            .tray_handle()
            .set_icon(tauri::Icon::Raw(
                include_bytes!("../icons/32x32.png").to_vec(),
            ))
            .unwrap(),
    };
}

fn build_menu() -> SystemTrayMenu {
    let menuitem_show = CustomMenuItem::new("show".to_string(), "loading...");
    let menuitem_quit = CustomMenuItem::new("quit".to_string(), "Quit");
    SystemTrayMenu::new()
        .add_item(menuitem_show)
        .add_native_item(SystemTrayMenuItem::Separator)
        .add_item(menuitem_quit)
}

fn main() {
    let tray_menu = build_menu();

    tauri::Builder::default()
        .system_tray(SystemTray::new().with_menu(tray_menu))
        .on_system_tray_event(move |app, event| match event {
            SystemTrayEvent::MenuItemClick { id, .. } => match id.as_str() {
                "quit" => {
                    std::process::exit(0);
                }
                "show" => {
                    let w = app.get_window("main").unwrap();
                    w.show().unwrap();

                    w.set_focus().unwrap();
                }

                _ => {}
            },
            _ => {}
        })
        .invoke_handler(tauri::generate_handler![greet, set_menu_item, set_tray_icon])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
