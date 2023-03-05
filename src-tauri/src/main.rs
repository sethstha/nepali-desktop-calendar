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
        // "2" => app_handle
        //     .tray_handle()
        //     .set_icon(tauri::Icon::Raw(
        //         include_bytes!("../icons/tray/2.png").to_vec(),
        //     ))
        //     .unwrap(),
        // "3" => app_handle
        //     .tray_handle()
        //     .set_icon(tauri::Icon::Raw(
        //         include_bytes!("../icons/tray/3.png").to_vec(),
        //     ))
        //     .unwrap(),
        // "4" => app_handle
        //     .tray_handle()
        //     .set_icon(tauri::Icon::Raw(
        //         include_bytes!("../icons/tray/4.png").to_vec(),
        //     ))
        //     .unwrap(),
        // "5" => app_handle
        //     .tray_handle()
        //     .set_icon(tauri::Icon::Raw(
        //         include_bytes!("../icons/tray/5.png").to_vec(),
        //     ))
        //     .unwrap(),
        // "6" => app_handle
        //     .tray_handle()
        //     .set_icon(tauri::Icon::Raw(
        //         include_bytes!("../icons/tray/6.png").to_vec(),
        //     ))
        //     .unwrap(),
        // "7" => app_handle
        //     .tray_handle()
        //     .set_icon(tauri::Icon::Raw(
        //         include_bytes!("../icons/tray/7.png").to_vec(),
        //     ))
        //     .unwrap(),
        // "8" => app_handle
        //     .tray_handle()
        //     .set_icon(tauri::Icon::Raw(
        //         include_bytes!("../icons/tray/8.png").to_vec(),
        //     ))
        //     .unwrap(),
        // "9" => app_handle
        //     .tray_handle()
        //     .set_icon(tauri::Icon::Raw(
        //         include_bytes!("../icons/tray/9.png").to_vec(),
        //     ))
        //     .unwrap(),
        // "10" => app_handle
        //     .tray_handle()
        //     .set_icon(tauri::Icon::Raw(
        //         include_bytes!("../icons/tray/10.png").to_vec(),
        //     ))
        //     .unwrap(),
        // "11" => app_handle
        //     .tray_handle()
        //     .set_icon(tauri::Icon::Raw(
        //         include_bytes!("../icons/tray/11.png").to_vec(),
        //     ))
        //     .unwrap(),
        // "12" => app_handle
        //     .tray_handle()
        //     .set_icon(tauri::Icon::Raw(
        //         include_bytes!("../icons/tray/12.png").to_vec(),
        //     ))
        //     .unwrap(),
        // "13" => app_handle
        //     .tray_handle()
        //     .set_icon(tauri::Icon::Raw(
        //         include_bytes!("../icons/tray/13.png").to_vec(),
        //     ))
        //     .unwrap(),
        _ => app_handle
            .tray_handle()
            .set_icon(tauri::Icon::Raw(
                include_bytes!("../icons/tray/1.png").to_vec(),
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
        .on_window_event(|event| match event.event() {
            tauri::WindowEvent::CloseRequested { api, .. } => {
                // don't kill the app when the user clicks close. this is important
                event.window().hide().unwrap();
                api.prevent_close();
            }
            tauri::WindowEvent::Focused(false) => {
                // hide the window automaticall when the user
                // clicks out. this is for a matter of taste.
                event.window().hide().unwrap();
            }
            _ => {}
        })
        .invoke_handler(tauri::generate_handler![
            greet,
            set_menu_item,
            set_tray_icon
        ])
        .setup(move |app| {
            app.set_activation_policy(tauri::ActivationPolicy::Accessory);
            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
