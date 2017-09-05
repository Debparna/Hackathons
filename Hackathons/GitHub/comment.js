var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        <link rel="stylesheet" href="code_snippet.css" />
        <title> Code Snippet </title>
        <style dangerouslySetInnerHTML={{__html: "\n    section {\n        display: block;\n    }\n    \n    section {\n        margin-top: 500px;\n    }\n    \n    span {\n        padding-right: 200px;\n    }\n    \n    .header {\n        font-weight: bolder;\n    }\n    \n    div {\n        padding-left: 100px;\n        padding-top: 400px;\n    }\n    \n    .row {\n        background-color: #9A9694;\n        border: solid white 10px;\n    }\n" }} />
        <img src=" no-profile-img-female" />
        <img src="no-profile-img-female" />
        <code> </code>
        <code> </code>
        <article>
          <p> @Paul 
            @Devin </p>
          <article>
            <div>
              <div>
              </div><table height={250} width="50%" cellPadding={0} cellSpacing={0}>
                <tbody><tr>
                    <td className="header"> Project </td>
                    <td> IOS App </td>
                    <td> IOS App </td>
                  </tr>
                  <tr>
                    <td className="header"> Language </td>
                    <td> Swift </td>
                    <td> Swift </td>
                  </tr>
                  <tr>
                    <td className="header"> IDE </td>
                    <td> Xcode </td>
                    <td> Xcode </td>
                  </tr>
                  <tr>
                    <td className="header"> Date Created </td>
                    <td> 8/2/16 </td>
                    <td> 8/2/16 </td>
                  </tr>
                  <tr>
                    <td className="header"> Date Modified </td>
                    <td> 8/15/16 </td>
                    <td> 8/15/16 </td>
                  </tr>
                </tbody></table>
            </div>
          </article></article></div>
    );
  }
});

/*
var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
      </div>
    );
  }
});
ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);
*/