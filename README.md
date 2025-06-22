# 🗒️ Local Storage Notes App (Next.js)
A simple Notes application built with **Next.js** and **React** that lets you write notes, store them in your browser's `localStorage`, and retrieve them even after refreshing the page.

---

## ✨ Features

- Add new notes with a single click
- Delete individual notes
- Notes persist using `localStorage` (no backend required)
- Fully responsive and styled with CSS Modules
- Built with React hooks like `useState` and `useEffect`

---

## 🚀 How It Works
- When the app loads, it checks `localStorage` for any previously saved notes and loads them into the UI.
- When a user types a note and clicks "Add Note", it:
  - Adds the note to the `notes` state
  - Saves the updated array to `localStorage`
- Deleting a note updates both the state and `localStorage` immediately

---

## 🧠 Key Concepts Used
- **`useState`**: Manages the current note input and the list of all notes.
- **`useEffect`**: Loads notes from `localStorage` when the component first mounts.
- **`localStorage`**: Stores and retrieves notes without needing a server or database.

---

## 💡 Usage Tips
- Refresh the page after adding notes — they’ll still be there!
- Want to reset? Open DevTools > Application tab > Local Storage > Clear `notes`

---

## 🔮 Future Improvements (Optional Ideas)
- Add timestamps for each note
- Add "Edit" functionality
- Categorize notes or add tags
- Sync with backend API

---
<img width="647" alt="Screenshot 2025-06-22 at 7 57 12 PM" src="https://github.com/user-attachments/assets/9a07d839-0416-42b2-a0fd-07f857a60ca4" />
