import ConfigurationView from "./configuration/view.js";
import ConfigurationModel from "./configuration/model.js";
import ConfigurationController from "./configuration/controller.js";

import ChatView from "./chat/view.js";
import ChatModel from "./chat/model.js";
import ChatController from "./chat/controller.js";

import AppController from "./App.js";

const configurationController = new ConfigurationController(new ConfigurationView(), new ConfigurationModel());

const chatController = new ChatController(new ChatView(), new ChatModel());

new AppController(configurationController, chatController)
