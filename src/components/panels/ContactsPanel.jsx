/**
 * ContactsPanel.jsx - Contact Information panel
 *
 * Displays contact details and social links.
 * TODO: Add your actual contact info here.
 */

import BasePanel from './BasePanel'

function ContactsPanel() {
  const contacts = [
    { type: 'Email', value: 'hello@example.com', icon: '✉' },
    { type: 'GitHub', value: 'github.com/user', icon: '⌥' },
    { type: 'LinkedIn', value: 'linkedin.com/in/user', icon: '▶' },
  ]

  const iconStyle = {
    display: 'inline-block',
    width: '14px',
    marginRight: '6px',
    textAlign: 'center',
  }

  return (
    <BasePanel title="CONTACTS">
      <div>
        {contacts.map((contact, index) => (
          <div
            key={index}
            style={{
              marginBottom: '6px',
              fontSize: '9px',
            }}
          >
            <span style={iconStyle}>{contact.icon}</span>
            <span style={{ color: '#ffcc00' }}>{contact.type}:</span>{' '}
            <span style={{ color: '#33ff33' }}>{contact.value}</span>
          </div>
        ))}
        <div style={{
          marginTop: '8px',
          padding: '4px',
          border: '1px dashed #1a8c1a',
          fontSize: '8px',
          color: '#1a8c1a',
        }}>
          [TODO: Add your contact info]
        </div>
      </div>
    </BasePanel>
  )
}

export default ContactsPanel