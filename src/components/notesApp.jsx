'use client';
import React, { useEffect, useState } from 'react';
import styles from './notesApp.module.css'

export default function NotesApp() {
    const [userInput, setUserInput] = useState('')
    const [notes, setNotes] = useState([]);

    const deleteNote = (indexToDelete) => {
        const updatedNotes = notes.filter((_, index) => index !== indexToDelete)
        setNotes(updatedNotes);
        localStorage.setItem('notes', JSON.stringify(updatedNotes));
    }

    const addNotes = () => {
        if (userInput.trim()) {
            const updatedNotes = [...notes, userInput];
            setNotes(updatedNotes);
            localStorage.setItem('notes', JSON.stringify(updatedNotes));
            setUserInput('');
        }
    }

    useEffect(() => {
        const savedNotes = localStorage.getItem('notes');
        if (savedNotes) {
            setNotes(JSON.parse(savedNotes));
        }
    }, [])

    return (
        <div className={styles.container}>
            <h1>Notes App</h1>
            <input
                placeholder='Input your notes here'
                type='text'
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
            />
            <button onClick={addNotes}>Add Note</button>

            <ul>
                {
                    notes.map((note, index) =>
                        <li key={index}>
                            {note}
                            <button onClick={() => deleteNote(index)}>X</button>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}