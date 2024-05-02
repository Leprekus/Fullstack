//
//  BarHubApp.swift
//  BarHub
//
//  Created by Raul Rodriguez on 2024-02-04.
//

import SwiftUI

@main
struct BarHubApp: App {
    var body: some Scene {
        MenuBarExtra("Test") {
            AppMenu()
        }
        //WindowGroup{ ... }
        //WindowGroup { ContentView() }
    }
}

struct AppMenu: View {
    /*
    func action1() {...}
    func action2() {...}
    func action3() {...}
    */
    
    var body: some View {
        Button(action: action1, label: { Text("Action 1") })
        Button(action: action2, label: { Text("Action 2") })
        
        Divider()

        Button(action: action3, label: { Text("Action 3") })
    }
}
