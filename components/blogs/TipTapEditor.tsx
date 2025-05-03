import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Link from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import TextAlign from '@tiptap/extension-text-align'
import Subscript from '@tiptap/extension-subscript'
import Superscript from '@tiptap/extension-superscript'
import Underline from '@tiptap/extension-underline'
import Strike from '@tiptap/extension-strike'
import { common, createLowlight } from 'lowlight'
import { useCallback } from 'react'

const lowlight = createLowlight(common)

interface TipTapEditorProps {
  content: string
  onChange: (content: string) => void
}

type Level = 1 | 2 | 3 | 4 | 5 | 6

const TipTapEditor = ({ content, onChange }: TipTapEditorProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-[--main-color] underline'
        }
      }),
      Image.configure({
        HTMLAttributes: {
          class: 'max-w-full rounded-lg'
        }
      }),
      CodeBlockLowlight.configure({
        lowlight,
        HTMLAttributes: {
          class: 'bg-[--second-bg-color] rounded-lg p-4 font-mono text-sm'
        }
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Subscript,
      Superscript,
      Underline,
      Strike,
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    }
  })

  const setHeading = useCallback((level: number) => {
    const validLevel = level as Level;
    editor?.chain().focus().toggleHeading({ level: validLevel }).run()
  }, [editor])

  const toggleBold = useCallback(() => {
    editor?.chain().focus().toggleBold().run()
  }, [editor])

  const toggleItalic = useCallback(() => {
    editor?.chain().focus().toggleItalic().run()
  }, [editor])

  const toggleUnderline = useCallback(() => {
    editor?.chain().focus().toggleUnderline().run()
  }, [editor])

  const toggleStrike = useCallback(() => {
    editor?.chain().focus().toggleStrike().run()
  }, [editor])

  const toggleSubscript = useCallback(() => {
    editor?.chain().focus().toggleSubscript().run()
  }, [editor])

  const toggleSuperscript = useCallback(() => {
    editor?.chain().focus().toggleSuperscript().run()
  }, [editor])

  const toggleCode = useCallback(() => {
    editor?.chain().focus().toggleCode().run()
  }, [editor])

  const toggleCodeBlock = useCallback(() => {
    editor?.chain().focus().toggleCodeBlock().run()
  }, [editor])

  const toggleBlockquote = useCallback(() => {
    editor?.chain().focus().toggleBlockquote().run()
  }, [editor])

  const setTextAlign = useCallback((align: 'left' | 'center' | 'right' | 'justify') => {
    editor?.chain().focus().setTextAlign(align).run()
  }, [editor])

  const handleButtonClick = useCallback((e: React.MouseEvent, callback: () => void) => {
    e.preventDefault();
    e.stopPropagation();
    callback();
  }, [])

  const setLink = useCallback(() => {
    const url = window.prompt('Enter URL')
    if (url) {
      editor?.chain().focus().setLink({ href: url }).run()
    }
  }, [editor])

  const addImage = useCallback(() => {
    const url = window.prompt('Enter image URL')
    if (url) {
      editor?.chain().focus().setImage({ src: url }).run()
    }
  }, [editor])

  const toggleBulletList = useCallback(() => {
    editor?.chain().focus().toggleBulletList().run()
  }, [editor])

  const toggleOrderedList = useCallback(() => {
    editor?.chain().focus().toggleOrderedList().run()
  }, [editor])

  if (!editor) {
    return null
  }

  return (
    <div 
      className="border border-gray-700 rounded-lg overflow-hidden"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="bg-[--second-bg-color] p-2 border-b border-gray-700">
        {/* Headings */}
        <div className="flex flex-wrap gap-2 mb-2 pb-2 border-b border-gray-700">
          <select
            onChange={(e) => {
              e.preventDefault();
              setHeading(parseInt(e.target.value));
            }}
            className="px-3 py-1.5 rounded bg-[--bg-color] text-[--text-color] border border-gray-700 focus:border-[--main-color] focus:outline-none text-sm"
            value={
              editor.isActive('heading', { level: 1 }) ? '1' :
              editor.isActive('heading', { level: 2 }) ? '2' :
              editor.isActive('heading', { level: 3 }) ? '3' :
              editor.isActive('heading', { level: 4 }) ? '4' :
              editor.isActive('heading', { level: 5 }) ? '5' :
              editor.isActive('heading', { level: 6 }) ? '6' : '0'
            }
          >
            <option value="0">Paragraph</option>
            <option value="1">Heading 1</option>
            <option value="2">Heading 2</option>
            <option value="3">Heading 3</option>
            <option value="4">Heading 4</option>
            <option value="5">Heading 5</option>
            <option value="6">Heading 6</option>
          </select>

          {/* Text Alignment */}
          <div className="flex gap-1">
            <button
              onClick={(e) => handleButtonClick(e, () => setTextAlign('left'))}
              className={`p-2 rounded hover:bg-[--bg-color] transition-colors ${
                editor.isActive({ textAlign: 'left' }) ? 'bg-[--bg-color]' : ''
              }`}
              type="button"
              title="Align Left"
            >
              <i className='bx bx-align-left'></i>
            </button>
            <button
              onClick={(e) => handleButtonClick(e, () => setTextAlign('center'))}
              className={`p-2 rounded hover:bg-[--bg-color] transition-colors ${
                editor.isActive({ textAlign: 'center' }) ? 'bg-[--bg-color]' : ''
              }`}
              type="button"
              title="Align Center"
            >
              <i className='bx bx-align-middle'></i>
            </button>
            <button
              onClick={(e) => handleButtonClick(e, () => setTextAlign('right'))}
              className={`p-2 rounded hover:bg-[--bg-color] transition-colors ${
                editor.isActive({ textAlign: 'right' }) ? 'bg-[--bg-color]' : ''
              }`}
              type="button"
              title="Align Right"
            >
              <i className='bx bx-align-right'></i>
            </button>
            <button
              onClick={(e) => handleButtonClick(e, () => setTextAlign('justify'))}
              className={`p-2 rounded hover:bg-[--bg-color] transition-colors ${
                editor.isActive({ textAlign: 'justify' }) ? 'bg-[--bg-color]' : ''
              }`}
              type="button"
              title="Justify"
            >
              <i className='bx bx-align-justify'></i>
            </button>
          </div>
        </div>

        {/* Text Formatting */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={(e) => handleButtonClick(e, toggleBold)}
            type="button"
            className={`p-2 rounded hover:bg-[--bg-color] transition-colors ${
              editor.isActive('bold') ? 'bg-[--bg-color]' : ''
            }`}
            title="Bold"
          >
            <i className='bx bx-bold'></i>
          </button>
          <button
            onClick={(e) => handleButtonClick(e, toggleItalic)}
            type="button"
            className={`p-2 rounded hover:bg-[--bg-color] transition-colors ${
              editor.isActive('italic') ? 'bg-[--bg-color]' : ''
            }`}
            title="Italic"
          >
            <i className='bx bx-italic'></i>
          </button>
          <button
            onClick={(e) => handleButtonClick(e, toggleUnderline)}
            type="button"
            className={`p-2 rounded hover:bg-[--bg-color] transition-colors ${
              editor.isActive('underline') ? 'bg-[--bg-color]' : ''
            }`}
            title="Underline"
          >
            <i className='bx bx-underline'></i>
          </button>
          <button
            onClick={(e) => handleButtonClick(e, toggleStrike)}
            type="button"
            className={`p-2 rounded hover:bg-[--bg-color] transition-colors ${
              editor.isActive('strike') ? 'bg-[--bg-color]' : ''
            }`}
            title="Strikethrough"
          >
            <i className='bx bx-strikethrough'></i>
          </button>
          <button
            onClick={(e) => handleButtonClick(e, toggleSubscript)}
            type="button"
            className={`p-2 rounded hover:bg-[--bg-color] transition-colors ${
              editor.isActive('subscript') ? 'bg-[--bg-color]' : ''
            }`}
            title="Subscript"
          >
            <i className='bx bx-subdirectory-left'></i>
          </button>
          <button
            onClick={(e) => handleButtonClick(e, toggleSuperscript)}
            type="button"
            className={`p-2 rounded hover:bg-[--bg-color] transition-colors ${
              editor.isActive('superscript') ? 'bg-[--bg-color]' : ''
            }`}
            title="Superscript"
          >
            <i className='bx bx-subdirectory-right'></i>
          </button>
          <button
            onClick={(e) => handleButtonClick(e, toggleCode)}
            type="button"
            className={`p-2 rounded hover:bg-[--bg-color] transition-colors ${
              editor.isActive('code') ? 'bg-[--bg-color]' : ''
            }`}
            title="Inline Code"
          >
            <i className='bx bx-code'></i>
          </button>
          <button
            onClick={(e) => handleButtonClick(e, toggleCodeBlock)}
            type="button"
            className={`p-2 rounded hover:bg-[--bg-color] transition-colors ${
              editor.isActive('codeBlock') ? 'bg-[--bg-color]' : ''
            }`}
            title="Code Block"
          >
            <i className='bx bx-code-block'></i>
          </button>
          <button
            onClick={(e) => handleButtonClick(e, toggleBlockquote)}
            type="button"
            className={`p-2 rounded hover:bg-[--bg-color] transition-colors ${
              editor.isActive('blockquote') ? 'bg-[--bg-color]' : ''
            }`}
            title="Quote"
          >
            <i className='bx bx-quote-left'></i>
          </button>
          <button
            onClick={(e) => handleButtonClick(e, toggleBulletList)}
            type="button"
            className={`p-2 rounded hover:bg-[--bg-color] transition-colors ${
              editor.isActive('bulletList') ? 'bg-[--bg-color]' : ''
            }`}
            title="Bullet List"
          >
            <i className='bx bx-list-ul'></i>
          </button>
          <button
            onClick={(e) => handleButtonClick(e, toggleOrderedList)}
            type="button"
            className={`p-2 rounded hover:bg-[--bg-color] transition-colors ${
              editor.isActive('orderedList') ? 'bg-[--bg-color]' : ''
            }`}
            title="Numbered List"
          >
            <i className='bx bx-list-ol'></i>
          </button>
          <button
            onClick={(e) => handleButtonClick(e, setLink)}
            type="button"
            className={`p-2 rounded hover:bg-[--bg-color] transition-colors ${
              editor.isActive('link') ? 'bg-[--bg-color]' : ''
            }`}
            title="Add Link"
          >
            <i className='bx bx-link'></i>
          </button>
          <button
            onClick={(e) => handleButtonClick(e, addImage)}
            type="button"
            className="p-2 rounded hover:bg-[--bg-color] transition-colors"
            title="Add Image"
          >
            <i className='bx bx-image'></i>
          </button>
        </div>
      </div>
      <EditorContent 
        editor={editor} 
        className="prose prose-invert max-w-none p-4 h-[600px] overflow-y-auto bg-[--bg-color]"
      />
    </div>
  )
}

export default TipTapEditor