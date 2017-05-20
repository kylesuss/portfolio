export default ({ color }) => (
  <div>
    <h1 style={{ color }}>
      Kyle Suss
    </h1>

    <style jsx>{`
      div {
        display: flex;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        height: 70px;
        align-items: center;
        justify-content: center;
      }

      h1 {
        margin: 0;
        font-size: 1.75rem;
      }
    `}</style>
  </div>
)
